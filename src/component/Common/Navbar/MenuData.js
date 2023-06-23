export const MenuData = [
    {
        name: "Inicio",
        href: "/", 
        has_children: false,
    },
    {
        name: "Acerca de Nosotros",
        href: "/about",
        has_children: false,
    },
    {
        name: "Serivicios",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Servicios",
                href: "/service",
                has_children: false,
            },
            {
                name: "Detalles",
                href: "/service_details",
                has_children: false,
            }
        ]
    },
    // {
    //     name: "Blog",
    //     href: "#!",
    //     has_children: true,
    //     children: [
    //         {
    //             name: "Blog Grid",
    //             href: "/blog_grid",
    //             has_children: false,
    //         },
    //         {
    //             name: "Blog With Sidebar",
    //             href: "/blog_with_sidebar",
    //             has_children: false,
    //         },
    //         {
    //             name: "Single Blog",
    //             href: "/blog_details",
    //             has_children: false,
    //         }
    //     ]
    // },
    // {
    //     name: "Pages",
    //     href: "#!",
    //     has_children: true,
    //     children: [
    //         {
    //             name: "Team",
    //             href: "/our_team",
    //             has_children: false,
    //         },
    //         {
    //             name: "Pricing",
    //             href: "/pricing",
    //             has_children: false,
    //         },
    //         {
    //             name: "Request Quote",
    //             href: "/request_quote",
    //             has_children: false,
    //         },
    //         {
    //             name: "Testimonials",
    //             href: "/testimonials",
    //             has_children: false,
    //         },
    //         {
    //             name: "Gallery",
    //             href: "/gallery",
    //             has_children: false,
    //         },
    //         {
    //             name: "FAQ",
    //             href: "/faqs",
    //             has_children: false,
    //         },
    //         {
    //             name: "Track Your Shipment",
    //             href: "/track_ship",
    //             has_children: false,
    //         },
    //         {
    //             name: "User",
    //             href: "#!",
    //             has_children: true,
    //             children: [
    //                 {
    //                     name: "SignIn",
    //                     href: "/signIn",
    //                     has_children: false,
    //                 },
    //                 {
    //                     name: "SignUp",
    //                     href: "/signup",
    //                     has_children: false,
    //                 },
    //             ]
    //         },
    //         {
    //             name: "Privacy Policy",
    //             href: "/privacyPolicy",
    //             has_children: false,
    //         },
    //         {
    //             name: "Terms & Condition",
    //             href: "/terms",
    //             has_children: false,
    //         },
    //         {
    //             name: "404 Error Page",
    //             href: "/error",
    //             has_children: false,
    //         },
    //     ]
    // },
    {
        name: "Contacto",
        href: "/contact",
        has_children: false,
    },
]