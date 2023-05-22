import { useRouter} from 'vue-router'

export async function myFetch(ressource, config = {}) {

    const router = useRouter();

    config.headers = {
        authorization : localStorage.getItem('token'),
    };

    const response = await fetch(ressource , config);

    if (response.status === 401) {
        localStorage.removeItem('token');
        await router.push({ path: "/login" });
    }


    return response;
}