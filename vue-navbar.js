new Vue({
    el: '#app',
    data: {
        brand: 'LOGO',
        items: [
            {
                name: 'Inicio',
                path: '#',
                children: []
            },
            {
                name: 'Productos',
                path: '#',
                dropdown: 'dropdown',
                dropdownToggle: 'dropdown-toggle',
                dropdownMenu: 'dropdown-menu',
                children: [
                    {
                        name: 'Dominios',
                        path: '#'
                    },
                    {
                        name: 'Hosting Emprendedor',
                        path: '#'
                    },
                    {
                        name: 'Hosting Profesional',
                        path: '#'
                    },
                    {
                        name: 'VPS SSD',
                        path: '#'
                    },
                    {
                        name: 'VPS Cloud',
                        path: '#'
                    },
                    {
                        name: 'Certificados SSL',
                        path: '#'
                    },
                    {
                        name: 'Correo Corporativo',
                        path: '#'
                    }
                ]
            },
            {
                name: 'Área de Clientes',
                path: '#',
                children: []
            },
            {
                name: 'Formas de Pago',
                path: '#',
                children: []
            },
            {
                name: 'Reporte de Pago',
                path: '#',
                children: []
            },
            {
                name: 'Contáctanos',
                path: '#',
                children: []
            }
        ]
    }
})