import React from "react";
import { ReactComponent as Icon15 } from '../utils/undraw_page_not_found_re_e9o6.svg';

export default function MenuBar() {
    return (

        <div className="App">
            <section>
                <div className='grid mx-0 h-auto min-h-screen surface-100 flex align-items-center justify-content-center'>
                    <div className='col-12 px-5 pt-8 max-w-30rem z-1 mx-auto text-center'>
                        <h1 className="text-indigo-900">ERROR_404. Page_Not_Found</h1>
                        <Icon15 className='w-full' data-aos='fade-up' data-aos-duration='1000' />
                    </div>
                </div>
            </section>
        </div>
    );
}