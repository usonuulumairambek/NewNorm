import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './ForMarkirovka.css'
import Aos from "aos";
import "aos/dist/aos.css";

export default function ForMarkirovka() {
	const links = [
		{ path: '/shoes', title: 'Обувь' },
		{ path: '/tekstil', title: 'Текстиль' },
		{ path: '/milk', title: 'Молоко' },
		{ path: '/parfum', title: 'Парфюм' },
		{ path: '/alcohol', title: 'Алкоголь' },
		{ path: '/tabak', title: 'Табак' },
	]	
	useEffect(() => {
		Aos.init({ duration: 3000 });
	  },[]);
	return (
		<div className='formarkirovka'>
			<div  data-aos="fade-up" className='formarkirovka_wrapper'>
				<div className='formarkirovka_title'>Все для маркировки</div>
				<div className='formarkirovka_links'>
					{links.map((item) => (
						<NavLink to={item.path} className='formarkirovka_links_item' key={item.title}>
							<div className='formarkirovka_links_item_round'>
								<i className='fas fa-chevron-right' />
							</div>
							<div className='formarkirovka_links_item_title'>{item.title}</div>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	)
}
