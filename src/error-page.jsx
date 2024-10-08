import { useRouteError } from 'react-router'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>
        <i>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  )
}
