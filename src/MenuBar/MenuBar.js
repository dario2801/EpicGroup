import { Menubar } from 'primereact/menubar';
import './MenuBar.css';
export default function MenuBar() {
    const items = [
        {
            label: 'HOME',
            url:'/'
        },
        {
            label: 'CENTROS',
            url:'/information'
           
        },
        {
            label: 'MATRICULATE',
            url: '/enrollment'
        },
        {
            label: 'CURSOS',
            url: '/onlinecourses'
        },
        {
            label: 'MENTORES',
            url: '/teachers'
        },
        {
            label: 'CONTACTO',
            url:'/contacto'
        }
    ];
    return (
        <Menubar className='w-full h-4rem fixed z-5 shadow-8' model={items} style={{ background: '#FA4917', borderColor: '#FA4917' }} />
    );
}