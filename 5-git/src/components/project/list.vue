<template>
    <div class="projects">
        <div v-for="repo in repos" :key="repo.id" class="row list">
            <div class="col-md-2">

            </div>
            <div class="col-md-10">
                <h2>
                    <router-link :to="{ name: 'view', params: { owner: repo.owner.login, repo: repo.name }}">
                        {{ repo.name }}
                    </router-link>
                </h2>
                <div>
                    <div>{{ repo.description }}</div>
                    <div class="detail">
                        <div>Forks {{ repo.forks}}</div>
                        <div>Watchers {{ repo.watchers}} </div>
                    </div>
                </div>    
            </div>
        </div>

        <div v-if="repos.length == 0">Search for something</div>
    </div>
</template>

<script>
export default {
    props: ['repos'],
}
</script>