<template>
    <section id="details">
        <div class="container">
            <ScrollAnimate>
              <div>
                <h2>Aperitivos</h2>
                <dl>
                    <dt>Bruschetta</dt>
                    <dd>Pão torrado com tomate, manjericão e azeite.</dd>
                    <dt>Bolinho de Bacalhau</dt>
                    <dd>Bolinho frito de bacalhau desfiado com batata.</dd>
                </dl>
              </div>
            </ScrollAnimate>
            <ScrollAnimate>
              <div>
                <h2>Bebidas</h2>
                <dl>
                    <dt>Caipirinha</dt>
                    <dd>A caipirinha é um clássico brasileiro feito com cachaça, limão, açúcar e gelo. É refrescante e a combinação perfeita de doce e ácido.</dd>
                    <dt>Batida de Coco</dt>
                    <dd>Uma bebida cremosa feita com cachaça, leite de coco, leite condensado e gelo. Doce e suave, é ideal para quem gosta de sabores tropicais.</dd>
                    <dt>Caju Amigo</dt>
                    <dd>Preparado com cachaça e suco de caju, o Caju Amigo é uma bebida simples e saborosa, com um toque de fruta fresca.</dd>
                    <dt>Rabo-de-Galo</dt>
                    <dd>Uma mistura forte e tradicional de cachaça com vermute, geralmente servida em copos pequenos. É popular entre os amantes de drinks mais encorpados.</dd>
                    <dt>Cerveja Artesanal Brasileira</dt>
                    <dd>O Brasil tem uma crescente cena de cervejas artesanais, com sabores variados que vão desde os mais leves até os mais complexos, refletindo ingredientes locais e técnicas tradicionais.</dd>
                </dl>
              </div>
            </ScrollAnimate>
        </div>
    </section>
</template>
<style scoped lang="css">
 .container {
    display: flex;
    justify-content: space-between;
    padding: 144px 64px;
    flex-wrap: wrap;
    gap: 32px;
  }
  dt, dd {
    color: white;
  }

  dt {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  dd {
    font-size: 18px;
    font-style: italic;
    color: rgb(153, 153, 153);
    margin-bottom: 16px;
  }
  h2 {
    font-size: 64px;
    color: rgb(231, 61, 12);
    margin-bottom: 32px;
  }

.container div {
  flex: 1 1 calc(50% - 32px);
}

@media (max-width: 768px) {
  li {
    flex: 1 1 100%;
  }
}

</style>