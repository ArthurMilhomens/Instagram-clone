import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class jonson {
	List<List<String>> table = new ArrayList<List<String>>();
	public String a;
	public jonson(String find_element) {
		a = find_element;
	}
	
	public List<Integer> termo() {
		List<Integer> response = new ArrayList<>();
		for(int y =0; y<this.table.size();y++) {
       	 for(int x=0;x<this.table.get(y).size();x++) {
       		 if(this.table.get(y).get(x).equals(this.a)) {
       			 response.add(x+1); response.add(y+1);
       			 return response;
       		 }
       	 }
        }
		return null;
	} 
	public void meu(){
		try{
	         BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\CTS\\Desktop\\treino_java\\TranscritoXFonetico.txt"));
	         
	         while(br.ready()){
	            String linha = br.readLine();
	            List<String> textoSeparadoList = new ArrayList<String>(Arrays.asList(linha.split(";")));
	            this.table.add(textoSeparadoList);
	         }
	         br.close();
	         
	         
	         
	      }
	         catch(IOException ioe){
	         ioe.printStackTrace();
	      }
		return;
	}
	public static void main(String[] args) {
		jonson c2 = new jonson(".");
		c2.meu();
		List<Integer> response = c2.termo();
		System.out.println( "X: " + response.get(0) + " Y: " + response.get(1));
	}
}
