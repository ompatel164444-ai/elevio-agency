import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  module Nat {
    public func compare(nat1 : Nat, nat2 : Nat) : Order.Order {
      if (nat1 < nat2) {
        #less;
      } else if (nat1 > nat2) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  var nextId = 0;
  var admin : ?Principal = null;
  let submissions = Map.empty<Nat, ContactSubmission>();

  func registerAdmin(caller : Principal) {
    if (admin == null) {
      admin := ?caller;
    };
  };

  func checkAdmin(caller : Principal) {
    switch (admin) {
      case (null) { registerAdmin(caller) };
      case (?admin) {
        if (caller != admin) { Runtime.trap("Unauthorized access") };
      };
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    registerAdmin(caller);
    let submission = {
      name;
      email;
      message;
    };
    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    checkAdmin(caller);
    submissions.values().toArray();
  };
};
