type PromptType = {
  description: string;
  title: string;
}

export default function Prompt({description, title}: PromptType) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}