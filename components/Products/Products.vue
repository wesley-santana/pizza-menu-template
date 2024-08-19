<template>
  <section id="products">
    <div class="container">
        <ul>
          <li v-for="(product, index) in products" :key="index" ref="cards">
            <img :src="product.img" :alt="`Pizza ${product.name}`">
            <h3>
              {{product.name}}
            </h3>
            <p>
              {{product.description}}
            </p>
            <p>
              {{product.price}}
            </p>
          </li>
        </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'Marguerita', description: 'Molho de tomate, mussarela e manjericão.', price: 'R$ 29,90', img: '/images/products/pizza.png' },
  { name: 'Pepperoni', description: 'Molho de tomate, mussarela e pepperoni.', price: 'R$ 34,90', img: '/images/products/pizza.png' },
  { name: 'Four Cheese', description: 'Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.', price: 'R$ 39,90', img: '/images/products/pizza.png' },
  { name: 'Marguerita', description: 'Molho de tomate, mussarela e manjericão.', price: 'R$ 29,90', img: '/images/products/pizza.png' },
  { name: 'Pepperoni', description: 'Molho de tomate, mussarela e pepperoni.', price: 'R$ 34,90', img: '/images/products/pizza.png' },
  { name: 'Four Cheese', description: 'Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.', price: 'R$ 39,90', img: '/images/products/pizza.png' }
];

const cards = ref([]);

onMounted(() => {
  gsap.from(cards.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: cards.value,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true
    }
  })
});

</script>
<style scoped lang="css">
  @import './styles.css';
</style>
