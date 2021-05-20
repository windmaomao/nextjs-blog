import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './avatar.module.css'

function Avatar() {
  const [ session, loading ] = useSession()
  const onSignInClick = e => {
    e.preventDefault()
    signIn()
  }
  const onSignoutClick = e => {
    e.preventDefault()
    signOut()
  }
  const { name, image } = session ? session.user : {}
  return (
    <div>
      {!session ? (
        <a
          href={`/api/auth/signin`}
          onClick={onSignInClick}
        >
          Sign in
        </a>
      ) : (
        <>
          <span
            style={{backgroundImage: `url(${image})` }}
            className={styles.avatar}
          ></span>&nbsp;
          <a
            href={`/api/auth/signout`}
            onClick={onSignoutClick}
          >
            Sign out
          </a>
        </>
      )}
    </div>
  )
}

export default Avatar