<template>
  <section id="testimonials">
    <div class="container">
      <div>
          <h2>Depoimentos</h2>
          <img src="/images/testimonials/pizza_testimonials_section.jpg" alt="Person 1">
      </div>
      <div>
        <article>
            <span>&#10077;</span>
            <p>Este produto mudou minha vida para melhor! Recomendo a todos.</p>
            <h3>Maria Silva</h3>
        </article>
        <article>
            <span>&#10077;</span>
            <p>O atendimento é excelente e a entrega sempre rápida. A pizza de quatro queijos é minha favorita, cheia de sabor e sempre quente quando chega.</p>
            <h3>João Pereira</h3>
        </article>
        <article>
            <span>&#10077;</span>
            <p>Descobri essa pizzaria por acaso e foi uma ótima surpresa. A pizza vegetariana é deliciosa e a variedade de sabores é impressionante. Recomendo a todos os meus amigos!</p>
            <h3>Ana Rodrigues</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const box = ref(null)

onMounted(() => {
  gsap.to(box.value, { rotation: 360, duration: 2 })
})
</script>

<style lang="css" scoped>
#testimonials {
  background-color: #f9f9f9;
  padding: 144px 64px;
}

article {
  margin-bottom: 32px;
}

h2,
h3,
p {
  color: #1d1d1d;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
}

p {
  font-size: 18px;
}

img {
    width: 100%;
    height: auto;
    border-radius: 30px;
}
.container h2 {
    font-size: 64px;
    margin-bottom: 32px;
}

span {
    font-size: 48px;
    color: #e73d0c;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}
.container div {
    flex: 1 1 calc(50% - 32px);
}

</style>