<template>
    <footer>
        <div class="container">
            <div class="box">
                <div>
                    <h4>Encontre-nos</h4>
                    <p>R. Bandeira Paulista, 777 - Itaim Bibi</p>
                </div>
                <div>
                    <h4>Horas</h4>
                    <span>
                        <p>Segunda a Sábado</p>
                        <p>9h às 19h</p>
                    </span>
                    <span>
                        <p>Domingo</p>
                        <p>10h às 16h</p>
                    </span>
                </div>
                <div>
                    <h4>Ligue para nós</h4>
                    <p>Telefone: +55 11 99199-9199</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="css">
    footer {
        background-image: url('/images/footer/background.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        min-height: 501px;
    }

    footer::after {
        display: block;
        content: '© Pizzaria  2024 | Produzido por Wesley de Santana';
        background-color: #434343;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        height: 40px;
        width: 100%;
    }

    h4 {
        font-size: 22px;
        color: rgb(17, 17, 17);
        margin-bottom: 16px;
        font-weight: bold;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box {
        width: 100%; 
        max-width: 720px;
        min-height: 501px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 16px;
    }

    .box div {
        flex: 1 1 calc(100% / 3);
        text-align: center;
        background-color: white;
        height: 200px;
        display: flex;
        padding: 32px;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }   

    .box div p {
        font-size: 18px;
        color: rgb(17, 17, 17);
    }

</style>
