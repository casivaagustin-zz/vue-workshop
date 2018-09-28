<template>
    <div id="home">
        <appHeader></appHeader>
        
        <div>
            <input type="text" v-model="search" v-on:keyup.13="searchTerm" />
        </div>

        <projectList v-bind:repos="repos"></projectList>
    </div>
</template>

<script>
    import projectList from '../components/project/list';
    import appHeader from '../components/appHeader';

    export default {
        data: function() {
            return {
                search: '',
                repos: [],
            }
        },
        created: function() {
            //this.searchTerm();
        },
        methods: {
            searchTerm: function() {
                var that = this;
                var url = '/search/repositories?q=' + that.search + '&sort=stars&order=desc';
                this.$http.get(url)
                    .then(function(data){
                        that.repos = data.data.items;
                    });
            }
        },    
        components: {
            projectList,
            appHeader
        },
    }
</script>

<style lang="scss">
    .header {
        max-height: 100px;
        img {
            height: 50px;            
        }
        margin-bottom: 10px;
    }

    .list {
        margin-bottom: 40px;
        h2 {
            font-size: 25px;
        }
        .detail {
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>