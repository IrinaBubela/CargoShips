import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

export interface Ship {
    id: number;
    built: number;
    name: string;
    lengthMeters: number;
    beamMeters: number;
    maxTEU: number;
    owner: string;
    grossTonnage: number;
}

export default function ShipsList(){
    const [shipsList, setShipsList] = useState<Ship[]>([])

    useEffect(() => {
        async function getData() {
          const data: Ship[] = await fetchShipsData();
          setShipsList(data);
        }
    
        getData()
    }, []);
    
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                {shipsList ? shipsList.map((el: Ship)=> (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={el.id}>
                        <div className="card text-dark card-has-bg click-col">
                            <img className="card-img d-none" alt="background"/>
                            <div className="card-img-overlay d-flex flex-column">
                                <NavLink to={{ pathname: `ship/${el.id}`}} state={{el}}>
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Country of origin: <br/>{excludeOwnerName(el.owner)}</small>
                                        <h4 className="card-title mt-0 "><p className="text-dark">{el.name}</p></h4>
                                        <small><i className="far fa-clock"></i> TEU: {el.maxTEU}</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">OWNER</h6>
                                                <small>{el.owner}</small>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )): ''}
            </div>
        </div>
    );
}

export const fetchShipsData = async (): Promise<Ship[]> => {
    return await fetch('http://localhost:5000/ships').then((res) => res.json());
};

export const excludeOwnerName = (ownerName: string): string => {
    return splitNameByParentheses(ownerName) ? splitNameByParentheses(ownerName) : `No country of origin`;
}

export const splitNameByParentheses = (name: string): string => {
    return name.split(/[()]+/)[1];
}