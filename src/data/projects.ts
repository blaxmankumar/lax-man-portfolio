export interface EngineeringProject {
  title: string;
  type: string;
  description: string;
  link: string;
  featured?: boolean;
  color: string;
  textColor?: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
}

// Source evidence is recorded in docs/PROJECT_VERIFICATION.md.
export const engineeringProjects: EngineeringProject[] = [
  {
    title: '7-Microservices AWS EKS',
    type: 'Cloud Architecture',
    featured: true,
    link: 'https://github.com/blaxmankumar/7-Microservice-Project',
    description: 'Seven containerized commerce services configured for AWS EKS with Amazon ECR images, ALB Ingress routing, internal service discovery, and separate PostgreSQL databases on Amazon RDS.',
    color: '#FF5C00',
    textColor: '#000000',
    image: '/eks_microservices.svg',
    mobileImage: '/eks_microservices_mobile.svg',
    imageAlt: 'AWS EKS architecture: users connect through ALB Ingress to Auth, Catalog, Inventory, Order, Payment, Notification and Analytics services, backed by separate RDS PostgreSQL databases. A separate ECR delivery path supplies deployment images.',
  },
  {
    title: 'RKE2 Kubernetes Infrastructure',
    type: 'Infrastructure / GitOps',
    link: 'https://github.com/blaxmankumar/rke2-project',
    description: 'Three-node RKE2 infrastructure configured through Ansible, with HAProxy routing, NGINX Gateway Fabric, and Argo CD manifests for declarative platform delivery.',
    color: '#fde047',
    textColor: '#000000',
    image: '/rke2_infrastructure.svg',
    mobileImage: '/rke2_infrastructure_mobile.svg',
    imageAlt: 'RKE2 repository architecture: HAProxy routes requests to Kong and NGINX ingress on three RKE2 servers. Separate management paths show Ansible provisioning, Argo CD platform configuration and the NGINX Gateway Fabric add-on.',
  },
  {
    title: 'Snake Game DevOps Automation',
    type: 'DevOps Automation',
    link: 'https://github.com/blaxmankumar/snake-game-app',
    description: 'Jenkins pipeline configuration provisions AWS VPC and EC2 infrastructure with Terraform and deploys a containerized Snake Game over SSH using Docker Compose. Separate Kubernetes manifests include NGINX Ingress routing.',
    color: '#333333',
    image: '/snake_devops.svg',
    mobileImage: '/snake_devops_mobile.svg',
    imageAlt: 'Snake Game repository workflow: Jenkinsfile stages define Terraform provisioning of AWS VPC and EC2 and SSH deployment of frontend, backend and NGINX containers with Docker Compose. Kubernetes manifests form a separate configuration lane; the diagram does not imply successful execution.',
  },
];
