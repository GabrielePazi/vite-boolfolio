<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from "axios";

export default {
  name: 'home',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      pagination: {}
    }
  }, methods: {
    fetchData(url) {
      //if the url is set in this case it means that i'm navigating through the pages and that i'm adding querys to the url, 
      //in the other case is the first load of the page
      axios.get(url ?? "http://127.0.0.1:8000/api/projects")
        .then((response) => {
          //inserts the found and paginated data in the variable projects
          this.projects = response.data.data;

          //deletes the data that has been saved in the projects, the remaining data are the informations for the pagination
          delete response.data.data;

          //assigns the pagination's data to the object
          this.pagination = response.data
        })
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
          <div class="cards-container d-flex gap-4 flex-wrap my-5">
            <div class="card" style="width: 30%" v-for="project in projects">
              <ProjectCard :project="project"></ProjectCard>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- paginazione -->
    <div class="text-center">
      <a v-for="pageLink in pagination.links" class="btn btn-link" @click="fetchData(pageLink.url)"
        v-html="pageLink.label"></a>
    </div>
  </section>
</template>

<style scoped></style>