import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

import { AuthContext } from '../App'
import{Button} from '../components/Button'

import Illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'


import '../styles/auth.scss'

export function Home() {
    const history = useHistory()
    const { signInWithGoogle, user } = useContext(AuthContext)


    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }


    return (
        <div id="page-auth">
            <aside>
                <img src={Illustration} alt="illustração simbolizando perguntas e responstas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />

                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleImg} alt="Logo da Google" />
                        Cria sua sala com o Google
                    </button>

                    <div className="separator">
                        ou entre em uma sala
                    </div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}