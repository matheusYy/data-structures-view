import { ErrorMessage, Field, Form, Formik, FormikFormProps, FormikHelpers } from "formik";
import { number, object } from "yup";
import dynamic from "next/dynamic";


interface FormikValues {
 input: number | "" | null;
}

export function FormikComponent() {

 const YupSchema = object().shape({
  input:
    number().
    max(9999999, "valor máximo atingido").
    min(1, "valor muito pequno").
    required("coloque o valor")
})


 return (

    <Formik
    initialValues={{ input: null }}
    validationSchema={YupSchema}
    onSubmit={(values: FormikValues, actions: FormikHelpers<FormikValues>) => {
      
      console.log(values);
      actions.setSubmitting(true);
      
      actions.resetForm({
        values: {
          input: "",
        },
        isSubmitting: true,
      });
      
    }}
    >
  {({  }) => {
    return (
      <Form>
        <div className="relative flex justify-end flex-col items-center text-center">
    <Field 
      className="relative md:max-w-[69.99%] max-w-[90%] m-auto md:p-3 lg:p-5 lock w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-100 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 outline-none bg-neutral-900"
      name="input"
      type="text"
      max="1"
      min="0"
      placeholder="insira um valor" 
      />
      <ErrorMessage className="absolute " name="input" component={"span"} key={0} />
      <span className="absolute top-2 md:left-[70.999%] left-[75.99%]">
        <Field
      style={{background: "#00000000"}}
      className="hover:text-red-100 rounded-sm p-1 mr-10 lowercase "
      name="submit"
      type="submit"
      />
        <ErrorMessage name="submit" component={"span"} key={1} />

      </span>
      </div>
        
    </Form>
  )
  }}

  </Formik>

 )
}