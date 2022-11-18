 constEliminar = async(req,res)=>{
    const id = req.params.id
    try{
     if (id == ''){
        res.status(400).send("EL ID NO ES VALIDO")
     }else{
        const rta = await itemModel.deleteOne({_id : id})
        res.status().send("Item eliminado con exito")
        console.log("elimindao:" + id)
     }
    }catch(err){
        console.log("error itenEliminar" + err)
    }
 }