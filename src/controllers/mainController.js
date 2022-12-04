module.exports = {
    home: (req, res) => {
        return res.render('home', {
            css: 'home',
            title: 'Home del Proyecto', 
            message: 'Hola a todos, es un mensaje creado de forma dinámica con template engines',
            user: "cacho"
        });
    },
    us: (req, res) => {
        return res.render('us', {
            css: 'us',
            title: 'Nosotros del Proyecto',
            message: 'Hola a todos, es un mensaje creado de forma dinámica con template engines, para la página de nosotros'
        });
    }
}