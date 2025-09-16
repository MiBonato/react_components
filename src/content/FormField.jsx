import Form from '../components/Form' 

export default function Formfield() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-4">
      <h1 className="text-2xl font-semibold">Form</h1>
      <div className="flex flex-wrap gap-3">
        <Form />
      </div>
    </div>
  )
}
