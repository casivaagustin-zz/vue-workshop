<template>
    <div id="home">
        <appHeader></appHeader>

        <div class="repo">
            <h2>
                <a :href="repo.html_url">
                    {{ repo.name }}
                </a>
            </h2>
            <div>
                <div>{{ repo.description }}</div>
                <div class="detail">
                    <div>Forks {{ repo.forks}}</div>
                    <div>Watchers {{ repo.watchers}} </div>
                </div>
                <div class="owner">
                    <img :src="repo.owner.avatar_url">
                    <div>{{ repo.owner.login }}</div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
    import appHeader from '../components/appHeader';

    export default {
        data: function() {
            return {
                search: '',
                repo: null,
            }
        },
        created: function() {
            this.getRepo();
        }, 
        methods: {
            getRepo: function() {
                var that = this;
                var owner = this.$route.params.owner;
                var repo =  this.$route.params.repo;

                var url = '/repos/' + owner + '/' + repo;
                this.$http.get(url)
                    .then(function(data){
                        that.repo = data.data;
                    });
            }
        },    
        components: {
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
        text-align: left;
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