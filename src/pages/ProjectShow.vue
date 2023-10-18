<script>
import axios from "axios";

export default {
  name: 'project.show',
  data() {
    return {
      project: {}
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
        .then((response) => {
          this.project = response.data;
          console.log(this.project);
        })
    },
    getImage(imageUrl) {
      if (imageUrl?.includes('https')) {
        return imageUrl;
      } else {
        return 'http://127.0.0.1:8000/storage/' + imageUrl;
      }
    },
    capitalize(string) {
      return string?.replace(string[0], string[0].toUpperCase())
    }
  }, mounted() {
    this.fetchData()
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="box">

            <!-- Title with project's type -->
            <h1 class="my-3">
              {{ capitalize(project.title) }}
              <span class="badge bg-primary ms-3">{{ project?.type?.title }}</span>
            </h1>

            <h5 class="d-flex gap-1">
              Tecnologies used in this Project: 
              <div v-for="technology in project?.technologies" class="badge" :style="`background-color: rgb(${technology?.color})`">{{ technology?.title }}</div>
            </h5>

            <div class="d-flex justify-content-between align-items-center">
              <h5 class="my-3">Published on: {{ project.release_date }}</h5>

              <h6><a :href="project.link">Project's Link</a></h6>
            </div>

            <div class="d-flex justify-content-center">
              <img v-if="project?.thumb" class="rounded-3" :src="getImage(project.thumb)" alt="Project Image"
                style="width:50%;height:300px">
            </div>

            <div class="my-4">
              <h5>Project's Description:</h5>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
