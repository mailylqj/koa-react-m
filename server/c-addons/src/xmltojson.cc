#include <node.h>
#include <iostream>
#include <fstream>
#include <string>
#include <sstream>


using namespace std;
using namespace v8;

namespace xml2json {
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        String::Utf8Value s(args[0]);
        std::string path(*s);
        cout << path << endl;
        
        std::ifstream in("//Users//cdliqiaojun//works//nodeserver//koa-server//server//xml//page.xml");
        std::ostringstream tmp;
        tmp << in.rdbuf();
        std::string str1 = tmp.str();
        cout << str1 << endl;

        std::string ss = "wertyuasdfghzxcv";
        int ii = ss.length();
        for(int i = 0; i < ii; i++)
        {
            if(ss[i] >= 'a' && ss[i] <= 'z'){
                ss[i] = ss[i] - 32;
            }
        }
        cout << ss;

        Local<String> str = v8::String::NewFromUtf8(isolate, "123456");
        args.GetReturnValue().Set(str);
    }

    void init(Local<Object> exports) {
        NODE_SET_METHOD(exports, "parser", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}