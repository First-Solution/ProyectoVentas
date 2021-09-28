import Perfile from 'media/perfil.png';
function Perfil() {
    return (
      <div class="h-screen bg-indigo-50 py-20 px-3">
    <div className="max-w-md mx-auto md:max-w-lg">
        <div className="w-full">
            <div className="bg-white p-3 rounded text-center py-5">
                <div className="flex justify-center"> <img class="rounded-full" src={Perfile} width="100"/> </div>
                <div className="text-center">
                    <h1 className="text-2xl mt-2">John Doe</h1>
                    <div className="flex flex-row px-4 mt-4">  <button class="h-10 w-full text-white text-md rounded bg-indigo-500 hover:bg-indigo-600 ml-2">Editar</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }

  export default Perfil;