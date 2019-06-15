const VCDParser = require('vcd-parser');
VCDParser.parse(
module tff(q,clk,reset)
output q;
input clk,reset
wire d;
D_FF dff0(q,d,clk,reset)
not n1(d,q);
endmodule

module D_FF(q,d,clk,reset)
output q;
input d,clk,reset;
reg q;

always @(posedge reset or negedge clk)

 begin
  if(reset)
    begin
    q=1'b0;
    end
   else
    begin
    q=d;
    end
   end
  endmodule
);

.then(parsedData => {
        console.log(parsedData);
        
    });
    .catch(err => {
        console.error(err);
    });