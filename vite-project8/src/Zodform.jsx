import { useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const zodSchema = z.object({
    name:z.string().min(3,"minimun length should be 3").max(15,"maximum length should be 15"),
    age:z.coerce.number().min(15,"minimun length should be 15").max(60,"maximum length should be 60"),
    password:z.string().min(5,"minimun length should be 5").max(15,"maximum length should be 15"),
    email:z.email('invalid email'),
    confirm:z.string()
}).refine((data) => data.password === data.confirm, {
    error: "Passwords don't match",
    path: ["confirm"], // path of error
  });
function Zodform(){
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(zodSchema)
    });

function handleForm(data){
console.log(data)
}
console.log("render")
    return(
        <>
        <form onSubmit={handleSubmit(handleForm)}>
        <div>
            <label htmlFor='first'>Name:</label>
            <input id='first' {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor='second'>Age:</label>
            <input id='second' {...register('age')}/>
            {errors.age && <span>{errors.age.message}</span>}
        </div>
         <div>
            <label htmlFor='forth'>Email:</label>
            <input id='forth' {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
            <label htmlFor='third'>Password:</label>
            <input id='third' type='password' {...register('password')}/>
            {errors.password && <span>{errors.password.message}</span>}
        </div>
         <div>
            <label htmlFor='fifth'>Confirm password:</label>
            <input id='fifth' type='password' {...register('confirm')}/>
            {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <button>Submit</button>
        </form>
        </>
    )
}

export default Zodform;