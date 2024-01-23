let issues = [];

function renderIssues() {
    const issuesContainer = document.getElementById('issues-container');
    issuesContainer.innerHTML = '';

    issues.forEach(issue => {
        const issueElement = document.createElement('div');
        issueElement.className = 'issue';
        issueElement.innerHTML = `
            <h3>${issue.title}</h3>
            <p>${issue.description}</p>
            <p>Priority: ${issue.priority}</p>
            <button onclick="updateIssue(${issue.id})">Update</button>
        `;
        issuesContainer.appendChild(issueElement);
    });
}

function openCreateIssueModal() {
    const modal = document.getElementById('createIssueModal');
    modal.style.display = 'block';
}

function closeCreateIssueModal() {
    const modal = document.getElementById('createIssueModal');
    modal.style.display = 'none';
}

function createIssue(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const newIssue = {
        id: issues.length + 1,
        title,
        description,
        priority
    };

    issues.push(newIssue);
    renderIssues();
    closeCreateIssueModal();
}

function updateIssue(issueId) {
    // Add your logic to update issues here
    console.log(`Updating issue with ID ${issueId}`);
}

// Sample issues for demonstration
issues = [
    { id: 1, title: 'Bug in Login Page', description: 'Cannot log in after multiple attempts.', priority: 'High' },
    { id: 2, title: 'Feature Request: Dark Mode', description: 'Users want a dark mode for better visibility at night.', priority: 'Medium' },
    { id: 3, title: 'Typo in About Page', description: 'Fix the spelling mistake in the About Us section.', priority: 'Low' },
];

renderIssues();
