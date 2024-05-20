import './Home.css'

const Home = () => {
    return(
        <>
        <section className='container'>

            <section className='info-container'>
                <h1>ConnectPeople</h1>
                <p>Bem-vindo à ConnectPeople - onde suas informações estão sempre à mão!
                Nossa missão é simples: centralizar informações, facilitar contatos e melhorar a gestão de dados pessoais. 
                </p>
            </section>
    
            <section className='planos-container'>
            <h2>Planos dos nossos serviços:</h2>   
                <ul>
                    <li>GOLD: R$49,90</li>
                    <li>PRO: R$99,90</li>
                    <li>ELITE: R$199,90</li>
                </ul>
            </section>  
        </section>
        </>
    )
}

export default Home