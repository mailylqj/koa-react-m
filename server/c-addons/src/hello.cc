#include <node.h>
#include <iostream>

using namespace std;
namespace demo {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  int fib(int n) 
  { 
    if (n > 1)
      return fib(n-1) + fib(n-2);
    return n;
  } 

  void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    Local<String> dd = String::NewFromUtf8(isolate, "hello world");
    int n = args[0]->NumberValue();
    Local<v8::Number> fibb = v8::Number::New(isolate, fib(n));
    args.GetReturnValue().Set(fibb);
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "hello", Method);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo