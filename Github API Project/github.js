class Github {
    constructor(){
        this.client_id = '6410f8752413585dfe0b';
        this.client_secret = 'c5f0a386cd3201a3078b5f272ee24bd98a4fcabb';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}