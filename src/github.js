class GitHub {
  constructor() {
    this.client_id = '9ff50c045de7ee24dded';
    this.client_secret = '9d04ea97b4a37930f1cdac7704adde26106d5af7';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  };
}

// Export and initialize new instance
export const github = new GitHub();
