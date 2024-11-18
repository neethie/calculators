import Calculator from "./components/pages/Calculator";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./layout/Layout";

export default function App() {
    return (
        <>
            <Layout>
                <Sidebar />
                <Calculator />
            </Layout>
        </>
    );
}
