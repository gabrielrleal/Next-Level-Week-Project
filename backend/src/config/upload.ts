import multer from 'multer';//multer -> biblioteca que lida com upload de imagens 
import path from 'path'; // sempre que for lidar com caminhos em node é interessante utilizar path

export default{
                             //__dirname retorna todo caminho até o diretório atual      
    storage: multer.diskStorage({ //salvando em disco
        destination: path.join(__dirname, '..','..','uploads/'),//pra onde vão os arquivos quando fizermos o upload
        filename: (request, file, cb) => { //recebe requisição, arquivo e callback, responsável por dar um nome ao arquivo
            const fileName =  `${Date.now()}=${file.originalname}`; // Date.now() data atual e o nome do arquivo original ( timestamp para que não exista duas imagens com mesmo nome )

            cb(null, fileName);
        }
    })                                    
}