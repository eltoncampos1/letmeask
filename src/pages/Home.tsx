import Illustration from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={Illustration} alt="illustração simbolizando perguntas e responstas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="LetMeAsk" />

                    <button>
                        <img src={googleImg} alt="Logo da Google" />
                        Cria sua sala com o Google
                    </button>

                    <div>
                        ou entre em uma sala
                    </div>

                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}