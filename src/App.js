import React,{useState} from "react";
import {Card,CardContent,Grid,Button} from "@mui/material"

function App() {
  const[img,setImg]=useState("Camel")
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent align="center">
             <img src={`img/${img}.jpg`} width={400} height={300}  alt="" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
     <Button onClick={()=>setImg("Camel")}  variant="contained" color="success" fullWidth>
       Camel
     </Button>
      </Grid>

      <Grid item xs={3}>
     <Button onClick={()=>setImg("Chipmunk")}  variant="contained" color="success" fullWidth>
       Chipmunk
     </Button>
      </Grid>

      <Grid item xs={3}>
     <Button onClick={()=>setImg("Fox")}  variant="contained" color="success" fullWidth>
       Fox
     </Button>
      </Grid>

      <Grid item xs={3}>
     <Button onClick={()=>setImg("Jiraaf")}  variant="contained" color="success" fullWidth>
       Jiraaf
     </Button>
      </Grid>

      <Grid item xs={3}>
     <Button onClick={()=>setImg("Lion")}  variant="contained" color="success" fullWidth>
       Lion
     </Button>
      </Grid>


    </Grid>
    
 
  );
}

export default App;
