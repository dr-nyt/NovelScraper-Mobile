/*
  Node.js for Mobile Apps Cordova plugin.

  The plugin APIs exposed to the Cordova layer.
 */

#import <Cordova/CDVPlugin.h>

@interface CDVNodeJS : CDVPlugin
{}

@property NSString* allChannelsListenerCallbackId;

+ (CDVNodeJS*) activeInstance;

- (void) setAllChannelsListener:(CDVInvokedUrlCommand*)command;

- (void) sendMessageToNode:(CDVInvokedUrlCommand*)command;

- (void) startEngine:(CDVInvokedUrlCommand*)command;

- (void) startEngineWithScript:(CDVInvokedUrlCommand*)command;

@end
