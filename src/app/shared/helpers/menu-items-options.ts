import { MenuItems } from '../models/menu-items.model';

export const menuItems: MenuItems[] = [
	{
		label: 'Currículo',
		items: [
			{
				label: 'Apresentação',
				icon: 'pi pi-home',
				routerLink: ['/'],
			},
			{
				label: 'Sobre Mim',
				icon: 'pi pi-user',
				routerLink: ['cv', 'sobre-min'],
			},
			{
				label: 'Experiências Profissionais',
				icon: 'pi pi-id-card',
				routerLink: ['cv', 'experiencias'],
			},
			{
				label: 'Certificações',
				icon: 'pi pi-book',
				routerLink: ['cv', 'certificacoes'],
			},
			{
				label: 'Formações',
				icon: 'pi pi-home',
				routerLink: ['cv', 'formacoes'],
			},
			{
				label: 'Competências e Habilidades',
				icon: 'pi pi-list',
				routerLink: ['cv', 'competencias'],
			},
			/* {
				label: 'Projetos',
				icon: 'pi pi-user-edit',
				routerLink: ['cv', 'projetos'],
			}, */
		],
	},
	{
		label: 'Contatos',
		items: [
			{
				label: 'Linkedin',
				icon: 'pi pi-linkedin',
				url: ['https://www.linkedin.com/in/prisciladuarte1993/'],
				target: '_blank',
			},
			{
				label: 'GitHub',
				icon: 'pi pi-github',
				url: ['https://github.com/prisciladuarte'],
				target: '_blank',
			},
			{
				label: 'WhatsApp',
				icon: 'pi pi-whatsapp',
				url: [
					'https://api.whatsapp.com/send?phone=5519991989546&text=Ol%C3%A1%21+Priscila, tudo bem ?&lang=pt_pt',
				],
				target: '_blank',
			},
		],
	},
];
