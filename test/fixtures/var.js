function file(_, _method) {_method.__escapehtml={"escapehash":{"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#x27;","/":"&#x2f;"},"escapereplace":function (k) {
            return __escapehtml.escapehash[k];
        },"escaping":function (str) {
            return typeof(str) !== 'string' ? str : str.replace(/[&<>"']/igm, this.escapereplace);
        },"detection":function (data) {
            return typeof(data) === 'undefined' ? '' : data;
        }};_method.__throw=function (error) {
        if(typeof(console) !== 'undefined') {
            if(console.warn) {
                console.warn(error);
                return;
            }

            if(console.log) {
                console.log(error);
                return;
            }
        }

        throw(error);
    }
'use strict';var _=_||{};var _out='';_out+=''; try { _out+=''; var val=_.val;var div=_.div; _out+='<div>';_out+= _method.__escapehtml.escaping(_method.__escapehtml.detection(val)) ;_out+='</div>'; } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} _out+='';return _out;
}