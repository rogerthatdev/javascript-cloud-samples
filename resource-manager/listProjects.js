// Resource Manager overview page: https://cloud.google.com/nodejs/docs/reference/resource-manager/latest/overview

const { ProjectsClient } = require('@google-cloud/resource-manager');
const { OrganizationsClient } = require('@google-cloud/resource-manager')

const orgClient = new OrganizationsClient();

async function showOrg() {
    const orgs = orgClient.searchOrganizationsAsync();
    console.log('Organization info:')
    for await (const org of orgs) {
        console.info(org);
    }
}

showOrg();

const projectClient = new ProjectsClient();

async function showProjects() {
    // Lists current projects
    const projects = projectClient.searchProjectsAsync();
    console.log('Projects:');
    for await (const project of projects) {
        console.info(project);
    }
}
showProjects();