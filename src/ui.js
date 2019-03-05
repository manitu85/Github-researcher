class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
       <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-4">
              <img class="img-fluid mb-2"  src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-outline-warning btn-block">View Profile</a>
            </div>
            <div class="col-md-8">
              <span class="badge badge-primary">Public Repos ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists ${user.gists}</span>
              <span class="badge badge-success">Followers:  ${user.followers}</span>
              <span class="badge badge-warning">Following: ${user.following}</span>
              <br>
              <ul class="list-group mt-3">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Lastest Repos</h3>
        <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="com-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a> 
          </div>
          <div class="com-md-6">
            <span class="badge badge-primary">Stars ${repo.stargazers_count}
            </span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}
            </span>
            <span class="badge badge-success">Forks: ${repo.forms_count}
            </span>
          </div>
        </div>
      </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaning alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add class name
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const parent = document.querySelector('.searchContiner');
    // Get a search form
    const search = document.querySelector('.search');
    // Insert alert
    parent.insertBefore(div, search);

    // Timeout after 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currAlert = document.querySelector('.alert');

    if (currAlert) {
      currAlert.remove();
    }
  }
}

// Export and initialize new instance
export const ui = new UI();
