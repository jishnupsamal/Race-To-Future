<template>
    <div class="container-sm main" data-aos='fade-up'>
        <h1 class='head'>You Imagine...</h1>
        <form name='Imagine' action="https://form2channel.com?form=Imagine" method="POST" enctype="multipart/form-data" netlify>
            <input type="hidden" name="formto_googlesheets" :value=Email>
            <input type="hidden" name="formto_email" :value=Email>
            <input type="hidden" name="formto_slack" :value=Slack>
            
            <div class='row g-2'>
            <div class="form-floating mr col-lg-6 col-sm-12">
                <input type="text" class="form-control" name='Name' placeholder="John Doe">
                <label for="Name">Name</label>
            </div>

            <div class="form-floating mr col-lg-6 col-sm-12">
                <input type="email" name='Email' class="form-control" placeholder="john.doe@email.address">
                <label for="Email">Email</label>
            </div>
            </div>
            <div class="form-floating mr">
                <textarea name='Your Imagination' class="form-control h-75" placeholder="I Imagine..."></textarea>
                <label for="Your Imagination">Your Imagination</label>
            </div>

            <input type='submit' class="form-control btn btn-outline-primary mr"/>
        </form>
    </div>
</template>

<script>
AOS.init()
export default {
    data() {
        return {
            Slack: import.meta.env.VITE_SLACK_WEBHOOK,
            Email: import.meta.env.VITE_EMAIL,
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.mr {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.head {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
}

.main {
    margin-bottom: 2rem;
}

</style>