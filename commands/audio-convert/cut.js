const%20fs%20%3D%20require%28%27fs%27%29%0Aconst%20%7B%20exec%20%7D%20%3D%20require%28%27child_process%27%29%0A%0Amodule.exports%20%3D%20%7B%0Aname%3A%20%5B%22cut%22%5D%2C%0Atype%3A%20%5B%22audio%22%5D%2C%0AuseLimit%3A%20true%2C%0Adescription%3A%20%22cut%20audio%20music%22%2C%0Autilisation%3A%20userbot.prefix%20%2B%20%22cut%22%2C%0A%0Aasync%20execute%28m%29%20%7B%0Alet%20%7B%20conn%2C%20args%20%7D%20%3D%20data%0Atry%20%7B%0Aif%20%28%21args%5B0%5D%29%20return%20m.reply%28%27detik%3F%27%29%0Aif%20%28%21args%5B1%5D%29%20return%20m.reply%28%27detik%3F%27%29%0A%20%20%20%20%20%20%20%20let%20q%20%3D%20m.quoted%20%3F%20%7B%20message%3A%20%7B%20%5Bm.quoted.mtype%5D%3A%20m.quoted%20%7D%20%7D%20%3A%20m%0A%20%20%20%20%20%20%20%20let%20mime%20%3D%20%28%28m.quoted%20%3F%20m.quoted%20%3A%20m.msg%29.mimetype%20%7C%7C%20%27%27%29%0A%20%20%20%20%20%20%20%20if%20%28%2Faudio%2F.test%28mime%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20media%20%3D%20await%20conn.downloadAndSaveMediaMessage%28q%29%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20ran%20%3D%20getRandom%28%27.mp3%27%29%0A%20%20%20%20%20%20%20%20%20%20%20%20exec%28%60ffmpeg%20-ss%20%24%7Bargs%5B0%5D%7D%20-i%20%24%7Bmedia%7D%20-t%20%24%7Bargs%5B1%5D%7D%20-c%20copy%20%24%7Bran%7D%60%2C%20%28err%2C%20stderr%2C%20stdout%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fs.unlinkSync%28media%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28err%29%20m.reply%28%60_%2AError%21%2A_%60%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20buff%20%3D%20fs.readFileSync%28ran%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20conn.sendFile%28m.chat%2C%20buff%2C%20ran%2C%20null%2C%20m%2C%20true%2C%20%7B%20quoted%3A%20m%2C%20mimetype%3A%20%27audio%2Fmp4%27%20%7D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fs.unlinkSync%28ran%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%0A%20%20%20%20%20%20%20%20%7D%20else%20m.reply%28%60Balas%20vn%2Faudio%20yang%20ingin%20diubah%20dengan%20caption%20%2A%24%7Buserbot.prefix%7Dcut%2A%60%29%0A%20%20%20%20%7D%20catch%20%28e%29%20%7B%0A%20%20%20%20%20%20%20%20throw%20e%0A%20%20%20%20%7D%0A%7D%0A%7D%0A%2F%2FPunya%20mamang%20rizky%0Aconst%20getRandom%20%3D%20%28ext%29%20%3D%3E%20%7B%0A%20%20%20%20return%20%60%24%7BMath.floor%28Math.random%28%29%20%2A%2010000%29%7D%24%7Bext%7D%60%0A%7D
