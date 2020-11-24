import React from 'react'
import { GreyScreenWithTittleLayout } from '../../components/GreyScreenWithTittleLayout/GreyScreenWithTittleLayout'
import './About.scss'
import Package from '../../../package.json'


export const About = () => {
    return (
        <GreyScreenWithTittleLayout tittle='Información'>
            <div className='about__container'>
                <div className='row mx-5 pt-5 mt-3'>
                    <p className='about__header mb-1'>Proyecto de:</p>
                    <ul className='list-unstyled about__ul mt-0'>
                        <li><a className='about__anchor' href='https://mallorcaboot.camp/' rel="noreferrer" target="_blank">Mallorca Bootcamp</a></li>
                    </ul>
                </div>
                <div className='row mx-5 pt-3'>
                    <p className='about__header mb-1'>Desarrollado por:</p>
                    <ul className='list-unstyled about__ul'>
                        <li><a className='about__anchor' href="https://github.com/Ralvgar" rel="noreferrer" target="_blank">Roberto Álvarez García</a></li>
                        <li><a className='about__anchor' href="https://github.com/JosemiChaves9" rel="noreferrer" target="_blank">Jose Miguel Chaves Ojeda</a></li>
                    </ul>
                </div>
                <div className='row mx-5 pt-3'>
                    <p className='about__header mb-1'>Diseño de interfaz:</p>
                    <ul className='list-unstyled about__ul'>
                        <li><a className='about__anchor' href="https://www.behance.net/lorenavicente" rel="noreferrer" target="_blank">Lorena Vicente Díaz</a></li>
                    </ul>
                </div>
                <div className='row mx-5 pt-3'>
                    <p className='about__header mb-1'>Ilustración página de error:</p>
                    <ul className='list-unstyled about__ul'>
                        <li><a className='about__anchor' href="https://stories.freepik.com/web" rel="noreferrer" target="_blank">Freepik Stories</a></li>
                    </ul>
                </div>
                <div className='row mx-5 pt-3'>
                    <p className='about__header mb-1'>Versión:</p>
                    <ul className='list-unstyled about__ul'>
                        <li>{Package.version}</li>
                    </ul>
                </div>

            </div>
        </GreyScreenWithTittleLayout>
    )
}
