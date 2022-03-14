console.log("Mulai React");

/**
 * Membuat Component Hello.
 * Mencetak UI(elements)
 */
function Hello(props) {
    console.log(props);

    // melakukan destructing props
    const { name } = props;

    // di dalam return adalah jsx
    return ( <
        div className = "hello" >
        <
        h2 > Hello React < /h2>    <
        p > Saya { name } - Frontend Engineer < /p>    < /
        div >
    );
}

/**
 * membuat componet main
 * menampilkan konten utama
 */

function main() {
    // mengirim props name ke componen Hello
    return ( <
        main >
        <
        Hello name = "rifqi" / >
        <
        Hello name = "ridwan" / >
        <
        Hello name = "ilham" / >
        <
        Hello name = "wahyu" / >
        <
        Hello name = "andi" / >
        <
        /main>
    )
}

/**
 * membuat component footer
 * menampilkan footer web
 */

function Footer() {
    return ( <
        footer >
        <
        h2 > Copyright aufaroot18 < /h2>   <
        p > dibuat menggunakan React JS < /p>      < /
        footer >
    )
}
/**
 * membuat component header
 * menampilkan navigasi
 */

function Header() {
    return ( <
        nav >
        <
        ul >
        <
        li > Home < /li>   <
        li > About < /li>   <
        li > Contact < /li>   < /
        ul > <
        /nav>
    )
}

function App() {
    return ( <
        div >
        <
        header > < /header>   <
        main > < /main>   <
        footer > < /footer>   < /
        div >
    )
}

/**
 * Mencetak Component Hello ke div root
 */
ReactDOM.render( < App / > , document.getElementById("root"))