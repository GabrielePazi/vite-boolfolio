<script>

export default {
  props: {
    project: Object
  },
  methods: {
    getImage(imageUrl) {
      if (imageUrl.includes('https')) {
        return imageUrl;
      }
      return 'http://127.0.0.1:8000/storage/' + imageUrl;
    },
    capitalize(string) {
      return string.replace(string[0], string[0].toUpperCase())
    }
  }
}
</script>

<template>
  <!-- Image -->
  <img :src="getImage(project.thumb)" class="card-img-top" style="height: 250px; object-fit:cover" alt="...">
  <div class="card-body">

    <!-- Title -->
    <h5 class="card-title">{{ capitalize(project.title) }}</h5>

    <!-- Type -->
    <h5><span class="badge bg-primary display-5">{{ project.type.title }}</span></h5>

    <!-- Technology -->
    <div v-for="technology in project.technologies" class="badge me-1 mb-2"
      :style="`background-color: rgb(${technology.color})`">{{ technology.title }}</div>


    <!-- Description -->
    <p class="card-text text-secondary">{{ capitalize(project.description) }}</p>

    <!-- Release date -->
    <h6>Release: <span class="card-text text-secondary">{{ project.release_date }}</span></h6>

  </div>

  <div class="m-3">
    <router-link :to="{name: 'project.show', params: { slug: project.slug }}"><button class="btn btn-primary w-100">Details</button></router-link>  
  </div>

  <!-- Link -->
  <div class="card-footer">
    <a :href="project.link" class="text-decoration-none text-black fw-bolder">GitHub Link</a>
  </div>
</template>

<style scoped></style>
