<template>
  <section id="products">
    <div class="container">
      <ul>
        <li>
            <img src="/images/products/pizza.png" alt="Pizza Marguerita">
            <h3>
                Marguerita
            </h3>
            <p>
                Molho de tomate, mussarela e manjericão.
            </p>
            <p>
                R$ 29,90
            </p>
        </li>
        <li>
            <img src="/images/products/pizza.png" alt="Pizza Pepperoni">
            <h3>
                Pepperoni
            </h3>
            <p>
                Molho de tomate, mussarela e pepperoni.
            </p>
            <p>
                R$ 34,90
            </p>
        </li>
        <li>
            <img src="/images/products/pizza.png" alt="Pizza Four Cheese">
            <h3>
                Four Cheese
            </h3>
            <p>
                Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.
            </p>
            <p>
                R$ 39,90
            </p>
        </li>
         <li>
            <img src="/images/products/pizza.png" alt="Pizza Marguerita">
            <h3>
                Marguerita
            </h3>
            <p>
                Molho de tomate, mussarela e manjericão.
            </p>
            <p>
                R$ 29,90
            </p>
        </li>
        <li>
            <img src="/images/products/pizza.png" alt="Pizza Pepperoni">
            <h3>
                Pepperoni
            </h3>
            <p>
                Molho de tomate, mussarela e pepperoni.
            </p>
            <p>
                R$ 34,90
            </p>
        </li>
        <li>
            <img src="/images/products/pizza.png" alt="Pizza Four Cheese">
            <h3>
                Four Cheese
            </h3>
            <p>
                Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.
            </p>
            <p>
                R$ 39,90
            </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="css">
  #products {
    margin-top: -32px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    gap: 16px;
  }

  li {
    flex: 1 1 calc(33.33% - 32px);
    padding: 32px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  img {
    width: 100%;
  }

  h3 {
    font-size: 24px;
    color: rgb(17, 17, 17);
  }

  li p:first-of-type {
    font-size: 16px;
    font-style: italic;
  }

  li p:last-child {
    color: rgb(231, 61, 12);
    font-weight: bold;
    align-self: center;
    font-size: 24px;
  }


@media (max-width: 768px) {
  li {
    flex: 1 1 calc(50% - 32px);
  }
}

@media (max-width: 480px) {
  li {
    flex: 1 1 100%;
  }
}

</style>