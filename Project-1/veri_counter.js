const VCDParser = require('vcd-parser');
VCDParser.parse(
module counter(C,CLR,Q);

input C,CLR;
output[3:0] Q;
reg[3:0] tmp;

always @(posedge C or posedge CLR)
begin
   
   if(CLR)
    begin
    tmp= 4'b0000;
    end 

   else
    begin
    tmp=tmp+1'b1;
    end
   end

assign Q=tmp;

endmodule
);

.then(parsedData => {
        console.log(parsedData);
        
    });
    .catch(err => {
        console.error(err);
    });
