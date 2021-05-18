import axios from 'axios';

export default class JourneyService{
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/journeys`,
            withCredentials: true
        })
    }

    create = data => this.instance.post('/', data);
    get = () => this.instance.get('/');
    getOne = id => this.instance.get(`/${id}`);
    updateOne = (id, data) => this.instance.put(`/${id}`, data);
    deleteOne = id => this.instance.delete(`/${id}`);
}